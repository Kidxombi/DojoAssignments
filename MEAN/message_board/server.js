var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/message_board_DB');

var schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength:4},
    content: {type:String, required:true, minlength:8},
    comments: [{type: schema.Types.ObjectId, ref:"Comment"}]


}, {timestamps:true})


var CommentSchema = new mongoose.Schema({
    _post: {type:schema.Types.ObjectId, ref:"Post"},
    name: {type:String, required:true, minlength:4},
    content: {type:String, required:true, minlength:8}
}, {timestamps:true})

mongoose.model('Post', PostSchema);
var _Post = mongoose.model('Post');

mongoose.model('Comment', CommentSchema);
var _Comment = mongoose.model('Comment');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    _Post.find({}).populate("comments").exec(function(err, posts){
        if (err) {
            console.log("error finding the posts");
            res.render('index')
        } else {
            var context = {
                posts:posts
            }
            res.render('index', context)
        }
    })
})

app.post('/posts/:id', function(req, res){
    var id = req.params.id;
    console.log(id);

    _Post.findOne({_id:id}, function(err, post){
        var new_comment = new _Comment({
            _post:post._id,
            name:req.body.name,
            content:req.body.comment
        })
        new_comment.save(function(err){
            if (err) {
                console.log("error saving comment");
                res.redirect('/');
            } else {
                console.log("save successfull");
                post.comments.push(new_comment._id);
                post.save(function(err){
                    if (err) {
                        console.log("error..during save of post after comment is made");
                        res.redirect('/');
                    } else {
                        console.log(new_comment);
                        res.redirect('/');
                    }
                })
            }
        })
    })
})



app.post('/posts/create', function(req, res){
    console.log(req.body);
    var new_post = new _Post({
        name: req.body.name,
        content: req.body.message
    })
    new_post.save(function(err){
        if (err) {
            console.log("error saving");
            res.redirect('/');
        } else {
            console.log("save successfull");
            res.redirect('/')
        }
    })
})

app.post('/posts/:id/destroy', function(req, res){
    var id = req.params.id;
    _Post.remove({_id:id}, function(err){
        if (err) {
            console.log("error deleting post");
            res.redirect('/');
        } else {
            console.log("successfully deleted post");
            res.redirect('/');
        }
    })


})

app.listen(8000)
