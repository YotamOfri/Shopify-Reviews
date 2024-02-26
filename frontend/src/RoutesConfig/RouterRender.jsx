import { Route } from "react-router-dom";
import transition from "./transition";
export const RouterRender = (routePaths) =>
  routePaths.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={
        !route.children ? transition(route.element, route.path) : route.element
      }
    >
      {route.children &&
        route.children.map((childRoute, childIndex) => (
          <Route
            key={childIndex}
            path={childRoute.path}
            element={transition(
              childRoute.element,
              `${route.path}+${childIndex}`
            )}
          />
        ))}
    </Route>
  ));
