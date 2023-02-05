//Validate task when creation
export const createTaskValidation = (req, res, next) => {
    const { title, description } = req.body;
    if (title && description) {
      next();
    } else {
      return res.status(400).json("Incomplete request");
    }
};

//Validate when getting a task
export const taskValidation = (req, res, next) => {
    const id = req.params.id;
    if (Number(id) > 0) {
      next();
    } else {
      return res.status(400).json("Incomplete request");
    }
};