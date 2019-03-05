export const enum Route {
  keyword,
  locale,
  homepage,
}

export const enum Route2 {
  homepage = "homepage",
}

const Config1 = {
  [Route.homepage]: 'test',
  [Route2.homepage]: 'test2',
}

console.log(Config1);
