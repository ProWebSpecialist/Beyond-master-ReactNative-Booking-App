import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

import Type from '../actions/type'
// import UserActionsType from '../../user/actions/type'

export const INITIAL_STATE = Immutable({
	loaded: false,
	notification: null,
	counts: null,
	notifications: null,
	gettingNotifications: false,
	locale: 'en',
	isLoadedVideo: true,
	cites:[],
	voiceMessages:null,
	messages:[],
	sendMessage:[]
})

// const getCitesAttemp = state => state.merge({ loaded: true, notification: null })
const getVoiceMessagesSuccess = (state, action) => {
	return {...state,voiceMessages: action.voiceMessages }
	// return state.merge({ voiceMessages: action.voiceMessages })
}
const getMessagesSuccess = (state, action) => {
	// alert(JSON.stringify( action.messages))
	let reverseArray = [];
	if(action.messages &&  action.messages.length > 0){
		reverseArray = action.messages.reverse()
	}
	return {...state,messages:  reverseArray}
}
const sendMessagesSuccess = (state, action) => {
	alert(JSON.stringify(action ))
	// return {...state,sendMessage: action.messages }
}

const getCitiesSuccess = (state, action) => {
	return state.merge({ cites: action.cites })
}

const appStartAttempt = state => state.merge({ loaded: false, notification: null })

const appStartSuccess = state => state.merge({ loaded: true, notification: null })

const appResetAttempt = state => state.merge({ ...INITIAL_STATE, locale: state.locale })

const appResetSuccess = state => state.merge({ loaded: true, notification: null })

const setNotification = (state, action) =>
	state.merge({ notification: { type: action.notificationType, message: action.message } })
const setLoadedVideo = (state, action) => state.merge({ isLoadedVideo: action.isLoadedVideo })

const resetNotification = state => state.merge({ notification: null })

const setInitialCounts = (state, { user: { notifications_counts } }) =>
	state.set('counts', notifications_counts)

const getNotificationsAttempt = state => state.set('gettingNotifications', true)
const getNotificationsFailure = state => state.set('gettingNotifications', false)
const getNotificationsSuccess = (state, { notifications }) =>
	state.merge({
		notifications: (state.notifications || []).concat(notifications),
		gettingNotifications: false,
	})

const setLanguage = (state, { locale }) => state.merge({ locale })
const signout = state => state.merge({ ...INITIAL_STATE })

// map our types to our handlers
const ACTION_HANDLERS = {
	[Type.GET_MESSAGES_SUCCESS]:getMessagesSuccess,
	[Type.SEND_MESSAGES_SUCCESS]:sendMessagesSuccess,
	[Type.GET_VOICE_MESSAGES_SUCCESS]:getVoiceMessagesSuccess,
	[Type.GET_CITIES_ATTEMPT]:getCitiesSuccess,
	[Type.APP_START_ATTEMPT]: appStartAttempt,
	[Type.APP_START_SUCCESS]: appStartSuccess,
	[Type.APP_RESET_ATTEMPT]: appResetAttempt,
	[Type.APP_RESET_SUCCESS]: appResetSuccess,
	[Type.APP_SET_LOADED_VIDEO]: setLoadedVideo,

	[Type.SET_NOTIFICATION]: setNotification,
	[Type.RESET_NOTIFICATION]: resetNotification,

	// [UserActionsType.GET_USER_SUCCESS]: setInitialCounts,
	[Type.GET_NOTIFICATIONS_FAILURE]: getNotificationsFailure,
	[Type.GET_NOTIFICATIONS_SUCCESS]: getNotificationsSuccess,
	[Type.GET_NOTIFICATIONS_ATTEMPT]: getNotificationsAttempt,
	// General
	[Type.SET_LANGUAGE]: setLanguage,

	[Type.SIGNOUT]: signout,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
