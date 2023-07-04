export const isMobileDevice = () => {
  const mobileDeviceRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileDeviceRegex.test(navigator.userAgent);
};
