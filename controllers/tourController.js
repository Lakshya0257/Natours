const Tour=require('../database/model/tour_model');



// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price'
//     });
//   }
//   next();
// };

exports.getAllTours =async (req, res) => {
  console.log(req.requestTime);
  const allTours=await Tour.find();
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: allTours.length,
    data: {
      allTours
    }
  });
};

exports.getTour = async(req, res) => {
  console.log(req.params);
  try{
    const tour=await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  }catch(err){
    res.status(404).json({
      status:"fail",
      message:"Not Found!"
    })
  }
};

exports.createTour = async(req, res) =>{
  // console.log(req.body);

  // const newId = tours[tours.length - 1].id + 1;
  try{
    const newTour=await Tour.create(req.body);
    res.status(201).json({
      status:'success',
      data:{
        tour:newTour
      }
    })
  }catch(err){
    res.status(400).json({
      status:"fail",
      message:err
    })
  }
  // tours.push(newTour);

  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   () => {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         tour: newTour
  //       }
  //     });
  //   }
  // );
};

exports.updateTour = async(req, res) => {
  try{
    const updatedTour=await Tour.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    });
    res.status(202).json({
      status:'updated',
      data:{
        tour:updatedTour
      }
    });

  }catch(err){
    res.status(404).json({
      status:"fail",
      message:"Not Found!"
    })
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};

exports.deleteTour = async(req, res) => {
  try{
    const deleteTour=await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: deleteTour
    });
  }catch(err){
    res.status(404).json({
      status:"fail",
      message:"Not Found!"
    })
  }
  
};
