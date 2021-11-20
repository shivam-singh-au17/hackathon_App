{
  $and: [
    {
      $or: [
        { $and: [{ to: req.body.to }, { from: req.body.from }] },
        { $and: [{ from: req.body.from }, { stops: req.body.to }] },
      ],
    },
  ];
}
