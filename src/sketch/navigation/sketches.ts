import {TestScreen} from '../../features/test';
type ComponentMap = Record<string, (t: any) => JSX.Element>;
const components: ComponentMap = {
  Test: TestScreen,
  Test1: TestScreen,
  Test2: TestScreen,
  Test3: TestScreen,
  Test4: TestScreen,
  Test5: TestScreen,
  Test6: TestScreen,
  Test7: TestScreen,
  Test8: TestScreen,
};
const showcases: ComponentMap = {};

export const SKETCHES = {
  components,
  componentsArray: Object.entries(components),
  showcases,
  showcasesArray: Object.entries(showcases),
};
