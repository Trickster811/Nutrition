import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/404";
// pages import
import NutritionDashboardAnalytics from "../pages/analytics";
import NutritionDashboardProfile from "../pages/profile";
import NutritionDashboardSettings from "../pages/settings";
import NutritionDashboardSubscription from "../pages/subscription";

// Route to Dashboard Page
function NutritionRoutes(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={<NutritionDashboardAnalytics />}
        errorElement={<PageNotFound />}
      />
      <Route
        path="profile"
        element={
          <NutritionDashboardProfile
            deleteAccount={props.deleteAccount}
            setDeleteAccount={props.setDeleteAccount}
          />
        }
        errorElement={<PageNotFound />}
      />
      <Route
        path="settings"
        element={<NutritionDashboardSettings />}
        errorElement={<PageNotFound />}
      />
      <Route
        path="subscription"
        element={<NutritionDashboardSubscription />}
        errorElement={<PageNotFound />}
      />
    </Routes>
  );
}

export default NutritionRoutes;
