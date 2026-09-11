/**
 * @jest-environment jsdom
 */

jest.mock("d3", () => {
  const chainable = () => {
    const obj = {};
    const methods = [
      "attr",
      "style",
      "text",
      "classed",
      "append",
      "on",
      "data",
      "enter",
      "curve",
      "call",
      "remove",
      "select",
      "selectAll",
    ];
    methods.forEach((m) => {
      obj[m] = jest.fn(() => obj);
    });
    obj.node = jest.fn(() => ({
      getBBox: () => ({ width: 100, height: 100 }),
      getComputedTextLength: () => 50,
      getAttribute: () => "v1",
    }));
    obj.nodes = jest.fn(() => []);
    return obj;
  };

  return {
    scaleLinear: jest.fn(() => {
      const fn = jest.fn(() => 1);
      fn.domain = jest.fn().mockReturnThis();
      fn.range = jest.fn().mockReturnThis();
      return fn;
    }),
    max: jest.fn((arr, accessor) => 100),
    format: jest.fn(() => jest.fn(() => "10")),
    scaleOrdinal: jest.fn(() => {
      const fn = jest.fn(() => "#123456");
      fn.domain = jest.fn().mockReturnThis();
      fn.range = jest.fn().mockReturnThis();
      return fn;
    }),
    schemeCategory10: [],
    select: jest.fn(() => chainable()),
    selectAll: jest.fn(() => chainable()),
    lineRadial: jest.fn(() => {
      const fn = jest.fn(() => "M0,0");
      fn.angle = jest.fn().mockReturnThis();
      fn.radius = jest.fn().mockReturnThis();
      fn.curve = jest.fn().mockReturnThis();
      return fn;
    }),
    curveCardinalClosed: "curveCardinalClosed",
    symbol: jest.fn(() => ({
      type: jest.fn().mockReturnThis(),
      size: jest.fn().mockReturnThis(),
    })),
    symbolCircle: "symbolCircle",
    range: jest.fn(() => ({ reverse: jest.fn(() => [1, 2, 3]) })),
  };
});

jest.mock("d3-svg-legend", () => ({
  legendColor: jest.fn(() => ({
    shape: jest.fn().mockReturnThis(),
    shapePadding: jest.fn().mockReturnThis(),
    scale: jest.fn().mockReturnThis(),
    orient: jest.fn().mockReturnThis(),
    on: jest.fn().mockReturnThis(),
  })),
}));

describe("Spider chart", () => {
  let visObject;

  beforeAll(() => {
    global.looker = {
      plugins: {
        visualizations: {
          add: jest.fn((vis) => {
            visObject = vis;
          }),
        },
      },
    };

    global.LookerCharts = {
      Utils: {
        textForCell: jest.fn((render) => (render ? render.value : "")),
        openDrillMenu: jest.fn(),
      },
    };

    require("./spider.js");
  });

  afterAll(() => {
    delete global.looker;
    delete global.LookerCharts;
  });

  it("registers the visualization with looker", () => {
    expect(global.looker.plugins.visualizations.add).toHaveBeenCalled();
    expect(visObject).toBeDefined();
  });

  it("creates the initial DOM element in create()", () => {
    const elem = document.createElement("div");
    visObject.create(elem, {});
    expect(elem.innerHTML).toContain('id="vis"');
  });

  it('renders a "No Results" message for empty data and calls doneRendering', () => {
    const doneRendering = jest.fn();
    visObject.addError = jest.fn();

    document.body.innerHTML = '<div id="vis"></div>';

    visObject.updateAsync.call(
      { addError: visObject.addError, clearErrors: jest.fn() },
      [],
      document.getElementById("vis"),
      {},
      {},
      {},
      doneRendering
    );

    expect(visObject.addError).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "No results.",
      })
    );
    expect(doneRendering).toHaveBeenCalled();
  });

  it("handles error when fewer than 3 measures are provided and calls doneRendering", () => {
    const doneRendering = jest.fn();
    const addError = jest.fn();
    const clearErrors = jest.fn();

    const mockData = [
      { m1: { value: 10 }, m2: { value: 20 }, dim: { value: "A" } },
    ];
    const mockQueryResponse = {
      fields: {
        dimensions: [{ name: "dim" }],
        dimension_like: [{ name: "dim" }],
        measure_like: [
          { name: "m1", label: "Measure 1" },
          { name: "m2", label: "Measure 2" },
        ],
      },
    };

    const container = document.createElement("div");

    visObject.updateAsync.call(
      { addError, clearErrors, trigger: jest.fn() },
      mockData,
      container,
      { levels: 3 },
      mockQueryResponse,
      {},
      doneRendering
    );

    expect(addError).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Multiple measures only.",
      })
    );
    expect(doneRendering).toHaveBeenCalled();
  });

  it("renders correctly with valid unpivoted dataset with numeric series labels and calls doneRendering", () => {
    const doneRendering = jest.fn();
    const addError = jest.fn();
    const clearErrors = jest.fn();
    const trigger = jest.fn();

    const mockData = [
      {
        m1: { value: 10 },
        m2: { value: 20 },
        m3: { value: 30 },
        dim: { value: 2024 },
      },
    ];
    const mockQueryResponse = {
      fields: {
        dimensions: [{ name: "dim" }],
        dimension_like: [{ name: "dim" }],
        measure_like: [
          { name: "m1", label: "Measure 1" },
          { name: "m2", label: "Measure 2" },
          { name: "m3", label: "Measure 3" },
        ],
      },
    };

    const container = document.createElement("div");
    Object.defineProperty(container, "clientWidth", {
      value: 500,
      configurable: true,
    });
    Object.defineProperty(container, "clientHeight", {
      value: 500,
      configurable: true,
    });

    visObject.updateAsync.call(
      { addError, clearErrors, trigger },
      mockData,
      container,
      { levels: 3, rounded_strokes: true },
      mockQueryResponse,
      {},
      doneRendering
    );

    expect(doneRendering).toHaveBeenCalled();
  });
});
