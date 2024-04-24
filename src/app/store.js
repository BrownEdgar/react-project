import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice';


const store = configureStore({
  reducer : {
    counter: counterSlice
  }
})   






export default store;
// funckya e vor@ uni object mej@ grel reducer : {} lini anpayman object vorir mej linelue tudunere qauntnere amen inch inch uzem
// 2 maini mej karatrel popoxucyune imortnere 3 veradarnal aystex reducer mej grel orinak unem ktro vore 0a anune counter
// stex reducer : {counter:} grem counter 0 stex chem grelu urem srci mej sarqem txtapanak nor features/counter/slice.js
// txtapanaknere ev meji slice.js sarqeluc heto slice.jsum petq e sarqem naxnakan arjehqs 0 batner avelacnel pakasacnel amen inch
// ev ayt amene mi funckyayov creitslice import { createSlice } from "@reduxjs/toolkit"; import aneluc heto
// grem const fayli anune = creteSlice({}) ev meje karoxenq grel 6 ban voric 3e partadir e
// 1 anun@ isk anune stex mer mot countern e, 2 ira naxnakan arjeq@ partadit vor kocvum e   initialState:0
//  ev 3 reducers:{} vori mej petq e grem mer funkcyanere vorov karox em ashxatacnel ev poxel 0 ev ayln
// ev counterSlice.jsi mej verjum import enq anum anpaym sa export default counterSlice.reducer vorpisi aystex counter: dimac grem anune hushumnere beri
// import { useSelector } from 'react-redux' grum em App.jsxi mej ev sa stanum e mek funckya  const S = useSelector((state) =>)
// aranc  useSelector() chem kara nkarem Appum aranc useDispatch ( chem kara poxem inchvor mi ban) import anem anpayman