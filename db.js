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
    
// content 필드 update
// modifiedAt 필드 세팅
db.posts.update(
	{ "title": "First Post"},
	{ $set: {
		content:"첫번째 포스트",
		modifiedAt: new Date()
		}
	}
)

db.posts.findOne()
        
// insert 주의사항
// $set연산자를 사용하지 않으면 무서 전체가 갱신
        
// .remove() : 문서 삭제
db.posts.find()
        

// title이 New Document인 문서 삭제
post = db.posts.findOne({"title": "New Document"})
db.posts.remove(post)

// title이 First Post인 문서 삭제
post = db.posts.findOne({"title": "First Post"})
db.posts.remove(post)

// hit가 10인 문서들
db.posts.find({hit:10})

// hit가 10이 아닌 문서들
db.posts.find({hit:{$ne:10}})

// hit가 50 이상
db.posts.find({hit:{$gte:50}})

// %and, &or : 논리 조합의 조건들을 배열로 전달
// 문서 중 hit수가 20~50 사이인 문서들 검색
db.posts.find({
		$and: [
			{hit:{$gte:20}},
			{hit:{$lte:50}}
		]
                    })
	


// 문서 중 hit수가 20이하이거나 50이상인 문서들 검색
db.posts.find({
		$or: [
			{hit:{$gte:50}},
			{hit:{$lte:20}}
		]
	
}
)

// 프로젝션
// find 메서드의 두번째 객체로 출력 필드 제어
// 1:출력, 0: 출력 안함

db.posts.find({},{"_id":0,"title":1,"content":1,"hit":1})

// 출력의 제한
// .skip: 건너 뛰기
// .limit: 출력 개수

//posts 컬렉션에서 전체문서 대상,
//2개 건너 뛰고, 4개 출력

db.posts.find({},
	{ "title":1, "hit":1, "_id":0}).limit(4).skip(2)
        
        
// 정렬 .sort
// 정렬 기준 필드:1 (오름차순), -1(내림차순)
// hit 필드 오름차순 정렬
db.posts.find({},
	{ "title":1, "hit":1}).sort({"hit":1})      
        
// hit 필드 내림차순 정렬
db.posts.find({},
	{ "title":1, "hit":1}).sort({"hit":-1})  