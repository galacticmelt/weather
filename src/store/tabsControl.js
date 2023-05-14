import {
  createEvent,
  createStore,
} from 'effector';

export const $currentTab = createStore('now');

export const switchTab = createEvent();

$currentTab.on(switchTab, (_, value) => value);
