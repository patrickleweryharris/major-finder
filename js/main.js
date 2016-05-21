$('#course_input').selectize({
  delimiter: [',', ' '],
  persist: false,
  create: function(input) {
		input = input.toUpperCase();
		return {
          	value: input,
          	text: input
      	};
  }
});