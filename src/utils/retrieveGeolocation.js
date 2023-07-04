export const retrieveGeolocation = (onSuccess, onError) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onSuccess(latitude, longitude);
      },
      (error) => {
        onError(error.message);
      }
    );
  } else {
    onError("Geolocation is not supported by this browser.");
  }
};
