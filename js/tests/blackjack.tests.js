QUnit.test( "css & js", function( assert ) {
	var link1 = $("head link:eq(0)").attr("href");
	var link2 = $("head link:eq(1)").attr("href");
	var link3 = $("head link:eq(2)").attr("href");

  assert.equal( link1, "css/bootstrap.min.css", "bootstrap.min.css is included." );
  assert.equal( link2, "css/qunit.css", "qunit.css is included." );
  assert.equal( link3, "css/custom.css", "custom.css is included." );
});