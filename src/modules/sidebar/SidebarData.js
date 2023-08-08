import React from 'react';
import { FaCartPlus, FaEnvelopeOpenText, FaDatabase, FaAws } from 'react-icons/fa';
import { BiSolidReport } from 'react-icons/bi';
import { MdBatchPrediction } from 'react-icons/md';
import { RiHealthBookFill } from 'react-icons/ri';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Database',
    icon: <FaDatabase />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/database',
        icon: <FaDatabase />
      },
      {
        title: 'Revenue',
        path: '/database',
        icon: <FaDatabase />
      }
    ]
  },
  {
    title: 'Reports',
    icon: <BiSolidReport />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: 'Order Demand',
        path: '/reports',
        icon: <BiSolidReport />,
        cName: 'sub-nav'
      },
      {
        title: 'Omni Demand',
        path: '/reports',
        icon: <BiSolidReport />,
        cName: 'sub-nav'
      },
      {
        title: 'Order Report',
        path: '/reports',
        icon: <BiSolidReport />
      }
    ]
  },
  {
    title: 'On Demand',
    path: '/ondemand',
    icon: <FaCartPlus />
  },
  {
    title: 'Batch Jobs',
    path: '/batchjobs',
    icon: <MdBatchPrediction />
  },
  {
    title: 'AWS',
    icon: <FaAws />,

    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: 'Lambda Actions',
        path: '/aws',
        icon: <FaAws />
      },
    ]
  },
  {
    title: 'API Health Check',
    path: '/apihealthcheck',
    icon: <RiHealthBookFill />
  }
];
