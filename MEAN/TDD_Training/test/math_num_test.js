var chai = require('chai'),
    expect = chai.expect,
    MathNum = require('./../math_num.js');

describe("MathNum", function () {
    it("can be initialized with value, with default value of 0", function () {
        var num = new MathNum(6);
        expect(typeof num.value).to.equal("number");
        expect(num.value).to.equal(6);

        describe('#val()', function () {
            var num = new MathNum();
            expect(typeof num.value).to.equal("number");
            expect(num.val()).to.equal(0);
        });

        describe('#add(num)', function () {
            it("accepts a number and adds it to the original value", function () {
                var num = new MathNum()
                num.add(3);
                expect(num.val()).to.equal(3);
                num.add(4);
                expect(num.val()).to.equal(7);
                num.add(1);
                expect(num.val()).to.equal(8);
            });
            context('when passed negative numbers or zero', function () {
                it("adds them as expected", function () {
                    var num = new MathNum();
                    num.add(-4);
                    expect(num.val()).to.equal(-4);
                    num.add(0);
                    expect(num.val()).to.equal(-4);
                });
            });
            context('when passed non-numbers', function () {
                it('does nothing', function () {
                    var num = new MathNum(5);
                    num.add("2");
                    expect(num.val()).to.equal(5);
                    num.add(false);
                    expect(num.val()).to.equal.false;
                    num.add({});
                    expect(num.val()).to.equal(5);
                });
            });
            context('when passed an array', function () {
                it('adds every value in the array', function () {
                    var num = new MathNum(4);
                    num.add([2, 2]);
                    expect(num.val()).to.equal(8);
                    num.add([-3, -3]);
                    expect(num.val()).to.equal(2);
                    num.add(["hello", 2]);
                    expect(num.val()).to.equal(4);
                });
            });
        });
        describe('#multiply(num)', function () {
            it('multiplies the original value by its passed number', function () {
                var num = new MathNum(5);
                num.multiply(2);
                expect(num.val()).to.equal(10);
            });
            context('when givin negative numbers or 0', function () {
                it('multiplys them as expected', function () {
                    var num = new MathNum(5);
                    num.multiply(-5);
                    expect(num.val()).to.equal(-25);
                    num.multiply(0);
                    expect(num.val()).to.equal(0);
                })
            })
            context('when givin non numbers', function () {
                it('does nothin', function () {
                    var num = new MathNum(5);
                    num.multiply("pizza");
                    expect(num.val()).to.equal(5);
                })
            })
            context('when passed an array', function () {
                it('multiplys the value of every single value in the array', function () {
                    var num = new MathNum(1);
                    num.multiply([4, "pizza", 6, [7, "cheese"], 9]);
                    expect(num.val()).to.equal(1512);
                });
            });
        });

        describe('#power(n)', function () {
            it('returns the original value to the nth power', function () {
                var num = new MathNum(5);
                expect(num.power(5)).to.equal(3125);
            });
        });


    });
});
