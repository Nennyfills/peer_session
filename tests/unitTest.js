import { should } from 'chai';
import sum from "../src";

should();

describe('When user input is empty', () => {
  it('return zero', async () => {
    const result = await sum("");

    result.should.eql(0);
  });

  it('return same number if one input is added', async () => {
    const result = await sum('3');

    result.should.eql(3);
  });

it('return the sum of the numbers when input is two numbers separated by comma', async () => {
    const result = await sum('3,5');

    result.should.eql(8);
  });
  
  it('return all the sum of all the numbers calculated ', async () => {
    const result = await sum('1,2,3');

    result.should.eql(6);
  });

  it('return the sum of all the numbers when new line is also used as delimiter', async () => {
      const result = await sum('1,2\n3\n4');
    result.should.eql(10);
  })
  
 it('return the sum of all the numbers when new line is also used custom single-character delimiter', async () => {
      const result = await sum('//;\n1;2');
    result.should.eql(3);
  })

   it('return the sum of all the numbers when new line is also used custom single-character delimiter', async () => {
      const result = await sum('//;\n1;2');
    result.should.eql(3);
  })

  it('return negatives not allowed if the input is a negative value', async () => {
      const result = await sum('x');
    result.should.eql('negatives not allowed');
  })

 it('return negatives not allowed if the input is a x y, z are negative value', async () => {
      const result = await sum('xyz');
    result.should.eql('negatives not allowed');
  })

  it('return the sum of both value only if the number is less than 1000', async () => {
      const result = await sum( '2/1001');
    result.should.eql(2);
  }) 

   it('return the sum of all the numbers with multiple numbers with a custom multi-character delimiter', async () => {
      const result = await sum('//[***]\n1***2***3');
    result.should.eql(6);
  })

   it('return the sum of all the numbers with multiple custom delimiters', async () => {
      const result = await sum('//[*][%]\n1*2%3');
    result.should.eql(6);
  })
});



/*
1. Given the user input is empty when calculating the sum then it should return zero.
2. Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
3. Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
4. Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
5. Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
6. Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
7. Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).
8. Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers). 
9. Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)
10. Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[***]\n1***2***3” should return 6)
11. Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[*][%]\n1*2%3” should return 6)
*/