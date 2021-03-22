import { should } from 'chai';
import getANumber from "../src";

should();

describe('Should fail for the right reason', () => {
  it('should fail when a string is passed as an agurment', async () => {
    const result = await getANumber('899');

    result.should.eql('not a number');
  });
});

describe('Should pass for the right reason', () => {
  it('should pass when a number is passed as an agurment', async () => {
    const result = await getANumber(2000);

    result.should.eql(2000);
  });
});