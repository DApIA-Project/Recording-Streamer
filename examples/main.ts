import {recordingStreamer} from "../src";
import {Recording} from "../src/types";

let recordsTest : Recording[] = []
let recordTest : Recording = { name : 'test.sbs', content : 'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:37.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
        'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:36.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
        'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:23.001,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
        'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:39.567,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
        'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:23.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
        'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:39.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n' +
        'MSG,3,3,5022202,3b7b96,5022202,2022/07/02,12:47:36.000000,2022/07/02,12:47:32.000000,DRAG66,1850.0,120.0,311.2759420272517,43.40913391113281,1.724150901617006,128.0,,0,0,0,0\n'}

recordsTest.push(recordTest)

recordingStreamer(recordsTest).catch(e => console.log(e))