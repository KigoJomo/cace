"use client";
import Image from 'next/image';
import React, { useState } from 'react';

import {
  DashboardOutlined,
  Dashboard,
  LightbulbOutlined,
  Lightbulb,
  MusicNoteOutlined,
  MusicNote,
  ThermostatOutlined,
  Thermostat,
  GppGoodOutlined,
  GppGood,
  NotificationsOutlined,
  Notifications,
  SettingsOutlined, // Imported but not used in iconConfig anymore
  Settings,
} from '@mui/icons-material';

// Update the iconConfig to exclude the settings icon
const iconConfig = [
  { id: 'dashboard', outlined: DashboardOutlined, filled: Dashboard },
  { id: 'lightbulb', outlined: LightbulbOutlined, filled: Lightbulb },
  { id: 'music', outlined: MusicNoteOutlined, filled: MusicNote },
  { id: 'thermostat', outlined: ThermostatOutlined, filled: Thermostat },
  { id: 'security', outlined: GppGoodOutlined, filled: GppGood },
  { id: 'notifications', outlined: NotificationsOutlined, filled: Notifications },
];

const SideBar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('dashboard');

  return (
    <aside className="w-fit flex flex-col items-center justify-between">
      <div className="logo">
        <Image
          alt="cace logo"
          src={'/images/logo.webp'}
          height={100}
          width={100}
          className="aspect-square w-8 object-contain"
        />
      </div>
      <nav className="w-full flex flex-col items-center gap-2">
        {iconConfig.map((icon) => {
          const IconComponent = activeButton === icon.id ? icon.filled : icon.outlined;
          return (
            <button
              key={icon.id}
              className={`p-3 aspect-square rounded-2xl ${
                activeButton === icon.id ? 'active' : ''
              }`}
              onClick={() => setActiveButton(icon.id)}
            >
              <IconComponent fontSize="small" className="rounded-xl" />
            </button>
          );
        })}
      </nav>
      <div className="extras flex flex-col items-center gap-2">
        <button
          className={`p-3 aspect-square rounded-3xl ${
            activeButton === 'settings' ? 'active' : ''
          }`}
          onClick={() => setActiveButton('settings')}
        >
          <Settings fontSize="small" className="rounded-xl" />
        </button>
        <button className="aspect-square w-12 overflow-hidden rounded-full bg-medium-gray">
          <Image
            src={'/images/user.webp'}
            alt="cace user"
            width={100}
            height={100}
          />
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
