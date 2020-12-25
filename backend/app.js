// import express module from node module
const express = require('express');
// import bcrypt module from node module
const bcrypt = require('bcrypt');
 //node module for uplode
const multer = require('multer');
//to acces into images foldoer
const path = require('path');
//import body parser module 
const bodyParser = require('body-parser');
//create express application
const app = express();
const cors = require('cors');
//create body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// import nodemailer et smtp
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
// configuration envoie email
let transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
  auth: {
      user: 'the.table.cafee@gmail.com',
      pass: 'the.table.cafee123456'
  },
  }));
// c pr images
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}
// storage d image
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});
//import mongoose
const mongoose = require('mongoose');
//connect to DB named cafe on port 27017 
mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true, useUnifiedTopology: true });
//import menu model const  
const Menu = require('./models/menu');
//import personnel model const  
const Personnel = require('./models/personnel');
//import reservation model const  
const Reservation = require('./models/reservation');
//import user model const  
const User = require('./models/user');

// security confg
app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
var options = {
  server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
  replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
  useNewUrlParser: true,
  useUnifiedTopology: true
};



//pr menu
//get all menus
app.get('/api/myMenus', (req, res) => {
    console.log('here in BE allMenus');
    //connect to DB
    Menu.find((err, document) => {
        if (err) {
            console.log('err in CNX with DB', err);
        } else {
            res.status(200).json({
                message: 'ok, here all objects',
                menus: document
            });
        }
    });

});
//get menu by id (display)
app.get("/api/getMenu/:id", (req, res) => {
    Menu.findOne({ _id: req.params.id }).then(
        document => {
            res.status(200).json({
                menu: document
            })
        }
    );
});
//  add menu
app.post('/api/addMenu', (req, res) => {
    console.log('here in adding menu');
    console.log('object is', req.body);
    const menu = new Menu({
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        quantities: req.body.quantities,
        image: req.body.image
    });
    menu.save().then(
        res.status(200).json({
            message: 'add sucessfully'
        })
    );
});
// delete menu
app.delete('/api/deleteMenu/:id', (req, res) => {
    Menu.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: 'Delete Successfilly'
        })
    )
});
//edit menu
app.put('/api/editMenu/:id', (req, res) => {
    console.log("here in update");
    const menu = new Menu({

        _id: req.body._id,
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        quantities: req.body.quantities,
        image: req.body.image
    });
    Menu.updateOne({ _id: req.params.id }, menu).then(
        data => {
            if (!data) {
                console.log('error');
            }
            else {
                console.log('Done');
                res.status(201).json({
                    message: 'updated'
                });
            }
        }
    )
});

//pour personnel
app.get('/api/myPersonnels', (req, res) => {
    console.log('here in BE allPersonnels');
    //connect to DB
    Personnel.find((err, document) => {
        if (err) {
            console.log('err in CNX with DB', err);
        } else {
            res.status(200).json({
                message: 'ok, here all objects',
                personnels: document
            });
        }
    });

});
//get personnel by id (display)
app.get("/api/getPersonnel/:id", (req, res) => {
    Personnel.findOne({ _id: req.params.id }).then(
        document => {
            res.status(200).json({
                personnel: document
            })
        }
    );
});
//add personnel 
app.post('/api/addPersonnel', (req, res) => {
    console.log('here in adding personnel');
    console.log('object is', req.body);
    const personnel = new Personnel({
        name: req.body.name,
        role: req.body.role,
        tel: req.body.tel,
        image: req.body.image
    });
    personnel.save().then(
        res.status(200).json({
            message: 'add sucessfully'
        })
    );
});
//delete personnel
app.delete('/api/deletePersonnel/:id', (req, res) => {
    Personnel.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: 'Delete Successfilly'
        })
    )
});
//edit personnel
app.put('/api/editPersonnel/:id', (req, res) => {
    console.log("here in update");
    const personnel = new Personnel({

        _id: req.body._id,
        name: req.body.name,
        role: req.body.role,
        tel: req.body.tel,
        image: req.body.image
    });
    Personnel.updateOne({ _id: req.params.id }, personnel).then(
        data => {
            if (!data) {
                console.log('error');
            }
            else {
                console.log('Done');
                res.status(201).json({
                    message: 'updated'
                });
            }
        }
    )
});
//pr reservation
//get all Reservations
app.get('/api/myReservations', (req, res) => {
    console.log('here in BE allReservations');
    //connect to DB
    Reservation.find((err, document) => {
        if (err) {
            console.log('err in CNX with DB', err);
        } else {
            res.status(200).json({
                message: 'ok, here all objects',
                reservations: document
            });
        }
    });

});
//get reservation by id (display)
app.get("/api/getReservation/:id", (req, res) => {
    Reservation.findOne({ _id: req.params.id }).then(
        document => {
            res.status(200).json({
                reservation: document
            })
        }
    );
});
//  add reservation
app.post('/api/addReservation', (req, res) => {
    console.log('here in adding reservation');
    console.log('object is', req.body);
    const reservation = new Reservation({
        name: req.body.name,
        place: req.body.place,
        nbPersonnes: req.body.nbPersonnes,
        tel: req.body.tel,
        date: req.body.date,
        time: req.body.time,
        note: req.body.note

    });
    reservation.save().then(
        res.status(200).json({
            message: 'add sucessfully'
        })
    );
});
// delete reservation
app.delete('/api/deleteReservation/:id', (req, res) => {
    Reservation.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: 'Delete Successfilly'
        })
    )
});
//edit reservation
app.put('/api/editReservation/:id', (req, res) => {
    console.log("here in update");
    const reservation = new Reservation({

        _id: req.body._id,
        name: req.body.name,
        place: req.body.place,
        nbPersonnes: req.body.nbPersonnes,
        tel: req.body.tel,
        date: req.body.date,
        time: req.body.time,
        note: req.body.note

    });
    Reservation.updateOne({ _id: req.params.id }, reservation).then(
        data => {
            if (!data) {
                console.log('error');
            }
            else {
                console.log('Done');
                res.status(201).json({
                    message: 'updated'
                });
            }
        }
    )
});
//pr user
//get all user
app.get('/api/allUsers', (req, res) => {
    console.log('here in BE allUsers');
    //connect to DB
    User.find((err, documents) => {
      if (err) {
        console.log('err in CNX with DB', err);
      } else {
        res.status(200).json({
          message: 'ok, here all objects',
          users: documents
        });
      }
    });
  
  });
  
  //get user by id (display) 
  app.get("/api/getUser/:id", (req, res) => {
    User.findOne({ _id: req.params.id }).then(
      document => {
        res.status(200).json({
          user: document
        })
      }
    );
  });
  // add user (signup)
  app.post('/api/addUser', multer({ storage: storage }).single('image'), (req, res) => {
    url = req.protocol + '://' + req.get('host');
    console.log('here in adding user');
    console.log('object is', req.body);
  
    bcrypt.hash(req.body.pwd, 10).then(cryptedPwd => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        pwd: cryptedPwd, 
        tel: req.body.tel,
        image: url + '/images/' + req.file.filename,
        role: req.body.role
      });
      user.save(err => {
        console.log(err);
        if (err) {
          res.status(200).json({
            message: err._message
          })
        } else {
          res.status(201).json({
            message: 'ok'
          })
        }
  
      })
    });
  });
  
  //delete user 
  app.delete('/api/deleteUser/:id', (req, res) => {
    User.deleteOne({ _id: req.params.id }).then(
      res.status(200).json({
        message: 'Delete Successfilly'
      })
    )
  });
  
  //login
  app.post('/api/login', (req, res) => {
    User.findOne({ email: req.body.email })
      .then((data) => {
        console.log("data", data);
        if (!data) {
          res.status(200).json({
            message: "Authentification Problem email",
          });
        }
        return bcrypt.compare(req.body.pwd, data.pwd);
      })
      .then((result) => {
        if (!result) {
          res.status(200).json({
            message: "Authentification Problem pwd",
          });
        }
        User.findOne({ email: req.body.email }).then(
          findedUser => {
            let userToSend = {
              role: findedUser.role,
              name: findedUser.name,
              image: findedUser.image,
              email: findedUser.email
            }
  
            res.status(200).json({
              message: "Welcome",
              user: userToSend
            });
          }
        )
  
      });
  })

  //envoyer email 
app.post('/api/sendmail',  (req, res) => {
  console.log('envoer email vers jamalo.ham19190@gmail.com');
 // console.log('object is', req.params);
  const mailOptions = {
    from: 'the.table.cafee@gmail.com',
    to: req.body.recevier_email,
    subject: 'nouvelle reservation',
    text: req.body.message
}
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
      console.log(error);
  } else {
      console.log('Email sent: ' + info.response);
  }
});
}
);
module.exports = app;