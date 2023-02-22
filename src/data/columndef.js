const subGridCellStyling = (param, key) => {
  return {
    background:
      param.value[key] > 0
        ? 'linear-gradient(90deg, #90d0f8 10%, #ffffff 60%)'
        : param.value[key] < 0
        ? 'linear-gradient(90deg, #d48788 10%, #ffffff 60%)'
        : 'transparent',
  };
};

const subGridCellStyling2 = (param, key) => {
  return {
    background:
      param.value[key] > 299
        ? '#90d0f8'
        : param.value[key] < 200
        ? '#d48788'
        : 'transparent',
  };
};

const subgrid = (param) => (
  <subgrid>
    <label style={subGridCellStyling(param, 'canon')}>
      {param.value.canon}%
    </label>
    <label style={subGridCellStyling(param, 'epson')}>
      {param.value.epson}%
    </label>
    <label style={subGridCellStyling(param, 'hp')}>{param.value.hp}%</label>
    <label style={subGridCellStyling(param, 'market')}>
      {param.value.market}%
    </label>
  </subgrid>
);

const subgrid2 = (param) => (
  <subgrid>
    <label style={subGridCellStyling2(param, 'brother')}>
      {param.value.brother}
    </label>
    <label style={subGridCellStyling2(param, 'epson')}>
      {param.value.epson}
    </label>
    <label style={subGridCellStyling2(param, 'hp')}>{param.value.hp}</label>
    <label style={subGridCellStyling2(param, 'mean')}>{param.value.mean}</label>
  </subgrid>
);

export const columnData = [
  {
    headerName: '',
    width: 200,
    pinned: 'left',
    children: [
      {
        headerName: 'Segment View',
        width: 100,
        children: [
          {
            headerName: '',
            field: 'segmentview',
            cellClass: 'segmentview-cell',
            width: 100,
          },
        ],
      },
    ],
  },
  {
    headerName: 'Sizing',
    width: 120,
    children: [
      {
        headerName: 'TTL T1 Sell-Thru (past 13 wks ttl)',
        width: 120,
        children: [
          {
            headerName: '',
            field: 'ttlT1',
            width: 120,
          },
        ],
      },
    ],
  },
  {
    headerName: 'Availability',
    width: 450,
    children: [
      {
        headerName: 'HP Supply (next 13 wks ttl)',
        width: 100,
        children: [
          {
            headerName: '',
            field: 'hpSupply',
            width: 100,
          },
        ],
      },
      {
        headerName: 'Projected TTL T1 WoS',
        width: 100,
        children: [
          {
            headerName: '',
            field: 'projectedTtlT1Wos',
            width: 100,
          },
        ],
      },
      {
        headerName: 'T1 Dist WoS',
        columnGroupShow: 'open',
        width: 75,
        children: [
          {
            headerName: '',
            field: 't1DistWoS',
            width: 75,
          },
        ],
      },
      {
        headerName: 'Final Tier WoS',
        columnGroupShow: 'open',
        width: 75,
        children: [
          {
            headerName: '',
            field: 'finalTierWoS',
            width: 75,
          },
        ],
      },
      {
        headerName: 'T1 Dist Aged Inv > 8wk',
        width: 100,
        columnGroupShow: 'open',
        children: [
          {
            headerName: '',
            field: 't1DistAgedInv',
            width: 100,
          },
        ],
      },
    ],
  },
  {
    headerName: 'Final-Tier Dynamic',
    width: 975,
    children: [
      {
        headerName: 'Rolling Market Growth',
        width: 100,
        children: [
          {
            headerName: '',
            field: 'rollingMarketGrowth',
            width: 100,
          },
        ],
      },
      {
        headerName: 'Rolling HP Growth (GFK)',
        width: 100,
        children: [
          {
            headerName: '',
            field: 'rollingHpGrowth',
            width: 100,
          },
        ],
      },
      {
        headerName: 'Rolling HP Growth (CDNA)',
        width: 100,
        children: [
          {
            headerName: '',
            field: 'rollingHpGrowth2',
            width: 100,
          },
        ],
      },
      {
        headerName: 'MS% Trend',
        width: 675,
        children: [
          {
            headerName: 'MS%',
            field: 'mS',
            cellClass: 'sub-grid-cell',
            cellRenderer: (param) => (
              <subgrid>
                <label>CANON</label>
                <label>EPSON</label>
                <label>HP</label>
                <label>MARKET YoY</label>
              </subgrid>
            ),
            width: 75,
          },
          {
            headerName: "Q2 '22",
            field: 'q2',
            width: 75,
            columnGroupShow: 'open',
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid,
          },
          {
            headerName: "Q3 '22",
            field: 'q3',
            width: 75,
            columnGroupShow: 'open',
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid,
          },
          {
            headerName: "Oct '22",
            field: 'oct22',
            width: 75,
            columnGroupShow: 'open',
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid,
          },
          {
            headerName: "Nov '22",
            field: 'nov22',
            width: 75,
            columnGroupShow: 'open',
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid,
          },
          {
            headerName: 'Dec wk1',
            field: 'decWk1',
            width: 75,
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid,
          },
          {
            headerName: 'Dec wk2',
            field: 'decWk2',
            width: 75,
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid,
          },
          {
            headerName: 'Dec wk3',
            field: 'decWk3',
            width: 75,
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid,
          },
          {
            headerName: 'Dec wk4',
            field: 'decWk4',
            width: 75,
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid,
          },
        ],
      },
    ],
  },
  {
    headerName: 'Pricing',
    width: 910,
    children: [
      {
        headerName: 'PFV Target',
        width: 75,
        children: [
          {
            headerName: '',
            field: 'pfvTarget',
            width: 75,
          },
        ],
      },
      {
        headerName: 'PFV',
        width: 75,
        children: [
          {
            headerName: '',
            field: 'pfv',
            width: 75,
          },
        ],
      },
      {
        headerName: 'ASP$ Trend',
        width: 660,
        children: [
          {
            headerName: 'ASP$',
            width: 100,
            cellClass: 'sub-grid-cell',
            cellRenderer: (param) => (
              <subgrid>
                <label>BROTHER</label>
                <label>EPSON</label>
                <label>HP</label>
                <label>MEAN</label>
              </subgrid>
            ),
          },
          {
            headerName: "Q2 '22",
            field: 'q22',
            width: 70,
            columnGroupShow: 'open',
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid2,
          },
          {
            headerName: "Q3 '22",
            field: 'q32',
            width: 70,
            columnGroupShow: 'open',
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid2,
          },
          {
            headerName: "Oct '22",
            field: 'oct222',
            width: 70,
            columnGroupShow: 'open',
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid2,
          },
          {
            headerName: "Nov '22",
            field: 'nov222',
            width: 70,
            columnGroupShow: 'open',
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid2,
          },
          {
            headerName: '12/2',
            field: 'a122',
            width: 70,
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid2,
          },
          {
            headerName: '12/9',
            field: 'a129',
            width: 70,
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid2,
          },
          {
            headerName: '12/16',
            field: 'a1216',
            width: 70,
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid2,
          },
          {
            headerName: '12/23',
            field: 'a1223',
            width: 70,
            cellClass: 'sub-grid-cell',
            cellRenderer: subgrid2,
          },
        ],
      },
      {
        headerName: "Quaterly ASP$ Mov't",
        width: 100,
        children: [
          {
            headerName: '',
            field: 'quaterlyAspMovt',
            width: 100,
          },
        ],
      },
    ],
  },
];
