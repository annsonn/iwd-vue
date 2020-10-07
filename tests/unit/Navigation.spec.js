import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";

describe("Navigation", () => {
  it("should render and match snapshot", () => {
    const wrapper = shallowMount(Navigation);
    expect(wrapper).toMatchSnapshot();
  });
});
