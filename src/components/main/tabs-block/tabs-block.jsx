import { useStore } from 'effector-react';
import TabNow from '../tab-now/tab-now';
import TabDetails from '../tab-details/tab-details';
import TabForecast from '../tab-forecast/tab-forecast';
import { $currentTab, switchTab } from '../../../store/tabsControl';
import './tabs-block.css';

function TabsBlock() {
  const currentTab = useStore($currentTab);

  const handleTabSwitch = (e) => {
    switchTab(e.target.dataset.name);
  };

  return (
    <div className="tabs-block">
      <div className='tab-content'>
        {currentTab === 'now' && <TabNow />}
        {currentTab === 'details' && <TabDetails />}
        {currentTab === 'forecast' && <TabForecast />}
      </div>
      <nav>
        <div
          role="presentation"
          data-name="now"
          className={`tab-bar-now ${currentTab === 'now' && 'chosen'}`}
          onClick={handleTabSwitch}
        >
          Now
        </div>
        <div
          role="presentation"
          data-name="details"
          className={`tab-bar-details ${currentTab === 'details' && 'chosen'}`}
          onClick={handleTabSwitch}
        >
          Details
        </div>
        <div
          role="presentation"
          data-name="forecast"
          className={`tab-bar-forecast ${
            currentTab === 'forecast' && 'chosen'
          }`}
          onClick={handleTabSwitch}
        >
          Forecast
        </div>
      </nav>
    </div>
  );
}

export default TabsBlock;
