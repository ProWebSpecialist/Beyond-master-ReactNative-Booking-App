import { delay } from 'redux-saga'
import { take, takeLatest, takeEvery, put, call, cancel, fork, select } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/constants'
// import { Actions as NavigationActions, ActionConst as NavigationType } from 'react-native-router-flux'

import Type from '../actions/type'
import Actions from '../actions/creator'
import { translate } from '../config/lang'

// Listen to various general app actions
const getToken = state => state.auth.token
const getUser = state => state.user.data
const getNotification = state => state.app.notification

export default api => {
	function* rehydrationComplete() {
		// TODO not used yet
	}

	function* appStartAttempt() {
		// const token = yield select(getToken)
		// // const user = yield select(getUser)

		// // NOTE purge store if needed
		// // yield put(CoreActions.appResetAttempt())

		// // if (user && !user.activated) {
		// // 	// reset app if user not activated
		// // 	yield put(CoreActions.appResetAttempt())
		// // } else {
		// if (token) {
		// 	api.setAuthToken(token)
		// 	// TODO offline ???

		// 	yield put(UserActions.loginSuccess(token))
		// }

		// yield put(CoreActions.appStartSuccess())
		// }
	}

	function* appStartSuccess() {
		// NOTE DEV navigate where you want on app reload
		// yield call(() => NavigationActions.SettingsMenu())
		// yield call(() => NavigationActions.SettingsPhone())
	}

	function* appResetAttempt() {
		// api.setAuthToken() // Remove auth header from api
		// yield delay(250) // NOTE fake some delay for RNRF actions
		// yield put(Actions.appResetSuccess())
	}

	function* appResetSuccess() {
		// TODO not used yet
	}

	function* setNotification() {
		yield call(delay, 2500)

		const notification = yield select(getNotification)
		if (notification) {
			// reset notification after delay if still present
			yield put(Actions.resetNotification())
		}
	}

	function* resetNotification(action) {
		const notification = yield select(getNotification)
		console.log("notification in resetNotification: ", notification, action.type)
		if (notification && (action.type !== Type.SET_NOTIFICATION || action.type !== Type.REACT_NATIVE_ROUTER_FLUX_REFRESH)) {
			// reset notification just before any action unless it's SET_NOTIFICATION
			yield put(CoreActions.resetNotification())
		}
	}

	function* getNotificationsAttempt() {
		// try {
		// 	const response = yield call(api.getNotifications)
		// 	console.log('====================================')
		// 	console.log(JSON.stringify(response))
		// 	console.log('====================================')
		// 	if (
		// 		response.ok &&
		// 		response.data &&
		// 		response.data.status === 'success' &&
		// 		response.data.data &&
		// 		response.data.data.notifications
		// 	) {
		// 		yield put(CoreActions.getNotificationsSuccess(response.data.data.notifications))
		// 	} else {
		// 		yield put(CoreActions.getNotificationsFailure(yield translate('No notifications yet.')))
		// 	}
		// } catch (err) {
		// 	yield put(CoreActions.getNotificationsFailure(err))
		// }
	}

	function* pusherNotificationReveived({ data }) {
		// try {
		// 	const notificationBody = yield call(() => JSON.parse(data.body))
		// 	const notification = { meta: data.meta, body: notificationBody }
		// 	yield put(CoreActions.getNotificationsSuccess([notification]))
		// } catch (err) {
		// 	yield put(CoreActions.getNotificationsFailure(err))
		// }
	}


	function* getCities() {
		try{
			const response = yield call(api.getCities)
			if (response && response.ok && response.data && response.data.success && response.data.success) {
				yield put(Actions.getCitiesSuccess(response.data.success.cities))
			} else {
				yield put(Actions.getCitiesFailure("INVALID_INFORMATION"))
			}
			// alert(JSON.stringify(response))
			
		}catch(err){
			yield put(Actions.getCitiesFailure("err"))
		}
	}

	function* getVoiceMessages(){
		try{
			const response = yield call(api.getVoiceMessages)
			if (response && response.ok && response.data) {
				yield put(Actions.getVoiceMessagesSuccess(response.data.success))
			} else {
				yield put(Actions.getVoiceMessagesFailure("INVALID_INFORMATION"))
			}	
		}catch(err){
			yield put(Actions.getVoiceMessagesFailure("err"))
		}
	}
	function* getMessages(action){
		// alert(action.user_id)
		try{
			const response = yield call(api.getMessages, action.user_id)
			if (response && response.ok && response.data ) {
				yield put(Actions.getMessagesSuccess(response.data.messages))
			}
		}catch(err){
			// yield put(Actions.getMessagesFailure("err"))
		}
	}

	function* sendMessages(action){
		// alert(JSON.stringify(action))
		try{
			const response = yield call(api.sendMessage, action.receiver_id,action.sender_id,action.message)
			// alert(JSON.stringify(response))
			if (response && response.ok && response.data ) {
				yield put(Actions.getMessagesAttempt(action.user_id))
			}
		}catch(err){
			// yield put(Actions.getMessagesFailure("err"))
		}
	}
	


	// The Main Watcher function
	function* startWatchers() {
		yield fork(takeEvery, REHYDRATE, rehydrationComplete)
		// Notifications
		yield fork(takeLatest, Type.SET_NOTIFICATION, setNotification)
		// yield fork(takeEvery, Type.GET_NOTIFICATIONS_ATTEMPT, getNotificationsAttempt)
		// yield fork(takeEvery, Type.PUSHER_NOTIFICATION_RECEIVED, pusherNotificationReveived)
		// // yield fork(takeLatest, '*', resetNotification)
		yield fork(takeLatest, Type.RESET_NOTIFICATION, resetNotification)
		// // App startup
		const startup = yield fork(appStartAttempt, yield take(Type.APP_START_ATTEMPT))
		yield fork(takeEvery, Type.APP_START_SUCCESS, appStartSuccess)
		yield fork(takeEvery, Type.APP_RESET_ATTEMPT, appResetAttempt)
		yield fork(takeEvery, Type.APP_RESET_SUCCESS, appResetSuccess)


		yield fork(takeEvery, Type.GET_CITIES_ATTEMPT, getCities)
		yield fork(takeEvery, Type.GET_VOICE_MESSAGES_ATTEMPT,getVoiceMessages)
		yield fork(takeEvery, Type.GET_MESSAGES_ATTEMPT,getMessages)
		yield fork(takeEvery, Type.SEND_MESSAGES_ATTEMPT,sendMessages)



		// // wait for the user to be logged out if needed
		yield take(Type.APP_RESET_ATTEMPT)
		yield cancel(startup)
	}

	return {
		startWatchers,
	}
}
