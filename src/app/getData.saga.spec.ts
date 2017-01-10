import { expect } from 'chai';

import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import {getDataSaga} from './getData.saga';

describe('#getData.saga', ()=>
{
  it('works', ()=>
  {
    const gen = getDataSaga();
    gen.next().value.should.deep.equal(call, query, http);
  });
});

test('incrementAsync Saga test', (t) => {
  const generator = incrementAsync()

  t.deepEqual(
    generator.next().value,
    call(delay, 1000),
    'counter Saga must call delay(1000)'
  )

  t.deepEqual(
    generator.next().value,
    put({type: 'INCREMENT'}),
    'counter Saga must dispatch an INCREMENT action'
  )

  t.deepEqual(
    generator.next(),
    { done: true, value: undefined },
    'counter Saga must be done'
  )

  t.end()
});