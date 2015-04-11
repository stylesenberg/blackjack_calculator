QUnit.test( "embedded css & js", function( assert ) {
	var link1 = $("head link:eq(0)").attr("href");
	var link2 = $("head link:eq(1)").attr("href");
	var link3 = $("head link:eq(2)").attr("href");

	var script1 = $("body script:eq(0)").attr("src");
	var script2 = $("body script:eq(1)").attr("src");
	var script3 = $("body script:eq(2)").attr("src");
	var script4 = $("body script:eq(3)").attr("src");
	var script5 = $("body script:eq(4)").attr("src");
	var script6 = $("body script:eq(5)").attr("src");

  assert.equal( link1, "css/bootstrap.min.css", "bootstrap.min.css is included." );
  assert.equal( link2, "css/qunit.css", "qunit.css is included." );
  assert.equal( link3, "css/custom.css", "custom.css is included." );

  assert.equal( script1, "js/jquery.min.js", "jquery.min.js is included." );
  assert.equal( script2, "js/bootstrap.min.js", "bootstrap.min.js is included." );
  assert.equal( script3, "js/chart.min.js", "chart.min.js is included." );
  assert.equal( script4, "js/qunit.js", "qunit.js is included." );
  assert.equal( script5, "js/custom.js", "custom.js is included." );
  assert.equal( script6, "js/tests.js", "tests.js is included." );
});

QUnit.test( "html authentication", function( assert ) {
	var textOfH1 = $("h1:first").text().indexOf("website")
  assert.ok( textOfH1 != "-1", "Text in <h1> contains 'website'." );
});