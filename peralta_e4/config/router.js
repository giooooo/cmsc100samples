var student = require('./../controller/student');
var degree = require('./../controller/degree');

module.exports = function (router) {
	router.route('/student')
		.get(student.findAll)
		.post(student.insert)
		.put(student.update);
	router.route('/student/:student_number')
		.get(student.findOne)
		.delete(student.remove);	
	router.route('/degree')
		.get(degree.findAll)
		.post(degree.insert)
		.put(degree.update);
	router.route('/degree/:degree_id')		
		.get(degree.findOne)
		.delete(degree.remove);		
	return router;
};
