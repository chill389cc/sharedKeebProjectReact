const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/keebServer', { // connects to or creates the db called test
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// basic schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const postSchema = new mongoose.Schema({
  title: String,
  subject: String,
  body: String,
  imageUrl: String,
  user: String
})

// create a virtual parameter for the schema called id
// We're doing this because by default every document in Mongo has a property called _id, but our Express API and our Vue code uses id instead.
// This lets us easily convert _id into id.
userSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
postSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
// We also ensure that when documents are serialized into JSON objects that virtual properties are included:
userSchema.set('toJSON', {
  virtuals: true
});
postSchema.set('toJSON', {
  virtuals: true
});
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

/////// users
app.get('/api/user', async (req, res) => {
  try {
    let users = await User.find();
    res.send({users});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/user/:username/:password', async (req, res) => {
  try {
    let user = await User.find({ username: req.params.username });
    if (user.length === 0) {
      const user = new User({
        username: req.params.username,
        password: req.params.password
      });
      try {
        await user.save();
        res.send({user:user});
      } catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
    } else {
      if (user[0].password === req.params.password) {
        res.send({user: user[0]});
      } else {
        res.sendStatus(401);
      }
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/user', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  try {
    await user.save();
    res.send({user:user});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

/////// posts
app.get('/api/posts', async (req, res) => {
  try {
    let posts = await Post.find();
    res.send({ posts });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.title = req.body.title
    post.imageUrl = req.body.imageUrl
    await post.save();
    res.send({post:post});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/posts/:id', async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    res.send({ post });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/posts', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    subject: req.body.subject,
    body: req.body.body,
    imageUrl: req.body.imageUrl,
    user: req.body.user
  });
  try {
    await post.save();
    res.send({ post });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    await Post.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
