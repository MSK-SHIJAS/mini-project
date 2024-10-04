import multer from 'multer';
import Trainer from '../Models/TrainerRegister.js'; // Adjust the path as necessary

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});
export const upload = multer({ storage: storage });


export const ViewTrainer = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const AcceptTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, { status: 'ACCEPTED' }, { new: true });
    console.log(trainer);
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const RejectTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, { status: 'REJECTED' }, { new: true });
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

