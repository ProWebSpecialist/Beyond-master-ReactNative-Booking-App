import Type from './type'
const appStartAttempt = () => ({ type: Type.APP_START_ATTEMPT })
const appStartSuccess = () => ({ type: Type.APP_START_SUCCESS })
const appResetAttempt = userId => ({ type: Type.APP_RESET_ATTEMPT, userId })
const appResetSuccess = () => ({ type: Type.APP_RESET_SUCCESS })

const setNotification = (notificationType, message) => ({
	type: Type.SET_NOTIFICATION,
	notificationType,
	message,
})
const resetNotification = () => ({ type: Type.RESET_NOTIFICATION })

const getNotificationsAttempt = () => ({ type: Type.GET_NOTIFICATIONS_ATTEMPT })
const getNotificationsSuccess = notifications => ({
	type: Type.GET_NOTIFICATIONS_SUCCESS,
	notifications,
})
const getNotificationsFailure = error => ({ type: Type.GET_NOTIFICATIONS_ATTEMPT, error })

const toggleDrawer = open => ({ type: Type.TOGGLE_DRAWER, open })
const setCurrentTab = key => ({ type: Type.SET_CURRENT_TAB, key })
const setCurrentScene = key => ({ type: NavigationType.FOCUS, key })

const pusherNotificationReveived = action => ({ type: Type.PUSHER_NOTIFICATION_RECEIVED, action })

const setLoadedVideo = isLoadedVideo => ({ type: Type.APP_SET_LOADED_VIDEO, isLoadedVideo })


const setLanguage = locale => ({ type: Type.SET_LANGUAGE, locale })

const loginAttempt = user => ({ type: Type.LOGIN_ATTEMPT, user })
const loginSuccess = (token, name, secretary_id,  user_id,  subscription) => ({ type: Type.LOGIN_SUCCESS, token: token, name: name, secretary_id, user_id,subscription})
const loginFailure = err => ({ type: Type.LOGIN_FAILURE, err })

const registerAttempt = () => ({ type: Type.REGISTER_ATTEMPT })
const registerSuccess = (token, name) => ({ type: Type.REGISTER_SUCCESS, token: token, name: name })
const registerFailure = err => ({ type: Type.REGISTER_FAILURE, err })

const forgotPasswordAttempt = (email) => ({ type: Type.FORGOT_PASSWORD_ATTEMPT, email: email })
const forgotPasswordSuccess = (passwordToken, phoneNumber) => ({ type: Type.FORGOT_PASSWORD_SUCCESS, passwordToken: passwordToken, phoneNumber: phoneNumber })
const forgotPasswordFailure = err => ({ type: Type.FORGOT_PASSWORD_FAILURE, err })

const resetPasswordAttempt = (data) => ({ type: Type.RESET_PASSWORD_ATTEMPT, data })
const resetPasswordSuccess = () => ({ type: Type.RESET_PASSWORD_SUCCESS })
const resetPasswordFailure = err => ({ type: Type.RESET_PASSWORD_FAILURE, err })


const getCitiesAttempt = () => ({ type: Type.GET_CITIES_ATTEMPT })
const getCitiesSuccess = (cities) => ({ type: Type.GET_CITIES_SUCCESS, cities:cities })
const getCitiesFailure = err => ({ type: Type.GET_CITIES_FAILURE, err })

const getMessagesAttempt = (user_id) => ({ type: Type.GET_MESSAGES_ATTEMPT, user_id:user_id })
const getMessagesSuccess = (messages) => ({ type: Type.GET_MESSAGES_SUCCESS, messages:messages })
const getMessagesFailure = err => ({ type: Type.GET_MESSAGES_FAILURE, err })

const sendMessagesAttempt = (receiver_id,sender_id, message) => ({ type: Type.SEND_MESSAGES_ATTEMPT, receiver_id:receiver_id,sender_id:sender_id, message:message})
const sendMessagesSuccess = () => ({ type: Type.SEND_MESSAGES_SUCCESS })
const sendMessagesFailure = err => ({ type: Type.SEND_MESSAGES_FAILURE, err })

const getVoiceMessagesAttempt = () => ({ type: Type.GET_VOICE_MESSAGES_ATTEMPT })
const getVoiceMessagesSuccess = (voiceMessages) => ({ type: Type.GET_VOICE_MESSAGES_SUCCESS, voiceMessages:voiceMessages })
const getVoiceMessagesFailure = err => ({ type: Type.GET_VOICE_MESSAGES_FAILURE, err })

const setRegisterInfo = user => ({ type: Type.SET_REGISTER_INFO, user: user })
const sendPhoneVerificationNumberAttempt = (phoneNumber, code) => ({
	type: Type.SEND_PHONE_VERIFICATION_NUMBER_ATTEMPT,
	phoneNumber: phoneNumber,
	code: code
})
const sendPhoneVerificationNumberSuccess = () => ({
	type: Type.SEND_PHONE_VERIFICATION_NUMBER_SUCCESS
})
const sendPhoneVerificationNumberFailure = err => ({ type: Type.SEND_PHONE_VERIFICATION_NUMBER_FAILURE, errorCode: err })
const signout = () => ({ type: Type.SIGNOUT })

export default {
	appStartAttempt,
	appStartSuccess,
	appResetAttempt,
	appResetSuccess,
	setLoadedVideo,


	setNotification,
	resetNotification,

	toggleDrawer,
	setCurrentTab,
	setCurrentScene,

	getNotificationsAttempt,
	getNotificationsSuccess,
	getNotificationsFailure,
	pusherNotificationReveived,

	setLanguage,

	///// auth //
	loginAttempt,
	loginSuccess,
	loginFailure,

	forgotPasswordAttempt,
	forgotPasswordSuccess,
	forgotPasswordFailure,

	resetPasswordAttempt,
	resetPasswordSuccess,
	resetPasswordFailure,

	registerAttempt,
	registerSuccess,
	registerFailure,

	setRegisterInfo,
	sendPhoneVerificationNumberAttempt,
	sendPhoneVerificationNumberSuccess,
	sendPhoneVerificationNumberFailure,

	getCitiesAttempt,
	getCitiesSuccess,
	getCitiesFailure,

	getVoiceMessagesAttempt,
	getVoiceMessagesSuccess,
	getVoiceMessagesFailure,

	getMessagesAttempt,
	getMessagesSuccess,
	getMessagesFailure,

	sendMessagesAttempt,
	sendMessagesSuccess,
	sendMessagesFailure,

	signout,
}
