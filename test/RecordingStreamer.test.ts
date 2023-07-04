import {afterEach, beforeEach, describe} from "mocha";
import assert from "assert";
import {callbackRecordingByTime, orderRecord} from "../src";
import {Recording} from "../src/types";
import sinon, {SinonFakeTimers} from 'sinon'


describe('Recording Streamer', () => {

    describe('orderRecord', () => {
        it('return an array of string sorted by time logged', async () => {
            let recordTest: Recording = {
                name: 'test.sbs',
                content: 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:37.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:36.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:23.001,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:39.567,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:23.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:39.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:32.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n'
            }

            let sortArray: string[] = orderRecord(recordTest)
            assert.deepStrictEqual(sortArray.length, 7)
            assert.deepStrictEqual(sortArray[0], 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:23.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0')
            assert.deepStrictEqual(sortArray[1], 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:23.001,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0')
            assert.deepStrictEqual(sortArray[2], 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:32.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0')
            assert.deepStrictEqual(sortArray[3], 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:36.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0')
            assert.deepStrictEqual(sortArray[4], 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:37.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0')
            assert.deepStrictEqual(sortArray[5], 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:39.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0')
            assert.deepStrictEqual(sortArray[6], 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:39.567,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0')

        })

        it('return an array of with one string ', async () => {
            let recordTest: Recording = {
                name: 'test.sbs',
                content: 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:37.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n'
            }

            let sortArray: string[] = orderRecord(recordTest)
            assert.deepStrictEqual(sortArray.length, 1)
            assert.deepStrictEqual(sortArray[0], 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:37.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0')

        })

        it('return an array empty when 0 string', async () => {
            let recordTest: Recording = {name: 'test.sbs', content: ''}

            let sortArray: string[] = orderRecord(recordTest)
            assert.deepStrictEqual(sortArray.length, 1)
            assert.deepStrictEqual(sortArray[0], '')

        })


    })

    describe.skip('callbackRecordingByTime', () => {
        let clock: SinonFakeTimers
        let print = (message: string) => {
            console.log(message)
        }

        beforeEach(() => {
            clock = sinon.useFakeTimers()
        })

        afterEach(() => {
            clock.restore()
        })

        it('return an array of string sorted by time logged', async () => {
            const recordTest: Recording = {
                name: 'test',
                content:
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:23.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:23.001,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:32.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:36.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:37.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:39.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
                    'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:39.567,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n'
            }

            const spy = sinon.spy(print)
            callbackRecordingByTime(recordTest, spy).then()

            sinon.assert.notCalled(spy)
            clock.tick(2)
            await new Promise((resolve) => setTimeout(resolve, 10))
            clock.tick(11)

            sinon.assert.calledOnce(spy)
        })


    })
})
