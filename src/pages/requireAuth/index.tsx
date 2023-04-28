import useAuth from "@/hooks/useAuth";
import { restoreState } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/store/store";
import { constants } from "@/utils/constant";

import { getLocalObject } from "@/utils/localHandler";
import { useEffect, useMemo } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();
  const { auth } = useAuth();
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(auth) {
      const restore = getLocalObject(constants.STORAGE_TOKEN)
      dispatch(restoreState(restore))
    }
  },[])

  const requireAuth = useMemo(() => {
    return auth ? (
      <Outlet />
    ) : (
      <Navigate to="/signin" state={{ from: location }} replace />
    )
  }, []);
  return requireAuth
};

export default RequireAuth;
