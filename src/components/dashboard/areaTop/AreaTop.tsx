import React, { useContext, useEffect, useRef, useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { SidebarContext } from '../../../context/SidebarContext';
import { addDays } from 'date-fns';
import { DateRange, DateRangeProps } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Ana stil dosyası
import 'react-date-range/dist/theme/default.css'; // Tema CSS dosyası
import './AreaTop.scss';

const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);

  const [state, setState] = useState<DateRangeProps['ranges']>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7) || new Date(),
      key: 'selection',
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef<HTMLDivElement>(null);

  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target as Node)) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="content-area-top">
      <div className="area-top-l">
        <button className="menu-toggle-btn" type="button" onClick={openSidebar}>
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">Gösterge Paneli</h2>
      </div>
      <div className="area-top-r">
        <div
          ref={dateRangeRef}
          className={`date-range-wrapper ${!showDatePicker ? 'hide-date-range' : ''}`}
          onClick={handleInputClick}
        >
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            showMonthAndYearPickers={false}
          />
        </div>
      </div>
    </section>
  );
};

export default AreaTop;
