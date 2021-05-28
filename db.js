// database check
show dbs

// select database
use config

// selected databse check
db
// inner collections check
show collections

//check detailed information
db.stats()

// Three isn't new DB creation command
use mydb
show dbs

// let's assume create blog service
// insert
db.posts.insert({
    title: "First Post",
    createAt: new Date()
})
// multi data insert
db.posts.insertMany([{
    title: "Learning MongoDB",
    content: "Study MongoDB",
    creatAt: new Date(),
    hit:100},
    {title: "Python Programming",
    creatAt: new Date(),
    hit:10},
    {title: "Oracle Database",
    creatAt: new Date(),
    hit: 30}
])
    
// view data
    
post = db.posts.findOne()
post.createdAt = new Date()
post
    
db.posts.save(post)
    
// if thres isn't id it's same with insert
post = {
    title: "New Document",
    createdAt: new Date(),
    hit: 0}
    
db.posts.save(post)
    
// content �ʵ� update
// modifiedAt �ʵ� ����
db.posts.update(
	{ "title": "First Post"},
	{ $set: {
		content:"ù��° ����Ʈ",
		modifiedAt: new Date()
		}
	}
)

db.posts.findOne()
        
// insert ���ǻ���
// $set�����ڸ� ������� ������ ���� ��ü�� ����
        
// .remove() : ���� ����
db.posts.find()
        

// title�� New Document�� ���� ����
post = db.posts.findOne({"title": "New Document"})
db.posts.remove(post)

// title�� First Post�� ���� ����
post = db.posts.findOne({"title": "First Post"})
db.posts.remove(post)

// hit�� 10�� ������
db.posts.find({hit:10})

// hit�� 10�� �ƴ� ������
db.posts.find({hit:{$ne:10}})

// hit�� 50 �̻�
db.posts.find({hit:{$gte:50}})

// %and, &or : �� ������ ���ǵ��� �迭�� ����
// ���� �� hit���� 20~50 ������ ������ �˻�
db.posts.find({
		$and: [
			{hit:{$gte:20}},
			{hit:{$lte:50}}
		]
                    })
	


// ���� �� hit���� 20�����̰ų� 50�̻��� ������ �˻�
db.posts.find({
		$or: [
			{hit:{$gte:50}},
			{hit:{$lte:20}}
		]
	
}
)

// ��������
// find �޼����� �ι�° ��ü�� ��� �ʵ� ����
// 1:���, 0: ��� ����

db.posts.find({},{"_id":0,"title":1,"content":1,"hit":1})

// ����� ����
// .skip: �ǳ� �ٱ�
// .limit: ��� ����

//posts �÷��ǿ��� ��ü���� ���,
//2�� �ǳ� �ٰ�, 4�� ���

db.posts.find({},
	{ "title":1, "hit":1, "_id":0}).limit(4).skip(2)
        
        
// ���� .sort
// ���� ���� �ʵ�:1 (��������), -1(��������)
// hit �ʵ� �������� ����
db.posts.find({},
	{ "title":1, "hit":1}).sort({"hit":1})      
        
// hit �ʵ� �������� ����
db.posts.find({},
	{ "title":1, "hit":1}).sort({"hit":-1})  