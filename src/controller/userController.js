export const getUsers = (req, res) => {
    res.status(200).json({
        message: 'success',
        requestTime: req.requestTime,
        data: [
            {
                id: 0,
                name: 'The Forest Hiker',
            },
        ],
    });
};
export const getUser = (req, res) => {
    console.log(req.body);
    res.status(200).json({ ...req.body, id: req.params.id });
};

export const createUser = (req, res) => {
    res.status(200).json({
        message: 'success',
        requestTime: req.requestTime,
        data: {
            tours: req.body,
        },
    });
};

export const updateUser = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        message: 'update success',
        requestTime: req.requestTime,
        data: {
            id,
            ...req.body,
        },
    });
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        message: 'update success',
        requestTime: req.requestTime,
        data: {
            id,
            ...req.body,
        },
    });
};
