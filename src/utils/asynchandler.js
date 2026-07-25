const asynchandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res.error(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export { asynchandler };
