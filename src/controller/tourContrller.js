export const getTours = (req, res) => {
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
export const getTour = (req, res) => {
    console.log(req.body);
    res.status(200).json({ ...req.body, id: req.params.id });
};

export const createTour = (req, res) => {
    res.status(200).json({
        message: 'success',
        requestTime: req.requestTime,
        data: {
            tours: req.body,
        },
    });
};

export const updateTour = (req, res) => {
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

export const deleteTour = (req, res) => {
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
