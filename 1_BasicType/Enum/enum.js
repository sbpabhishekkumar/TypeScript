var sbpRelease;
(function (sbpRelease) {
    sbpRelease[sbpRelease["local_test"] = 100] = "local_test";
    sbpRelease[sbpRelease["aws_test"] = 101] = "aws_test";
    sbpRelease[sbpRelease["aws_production"] = 102] = "aws_production";
})(sbpRelease || (sbpRelease = {}));
console.log(sbpRelease.aws_test);
