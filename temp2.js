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
              width: 75,
            },
            {
              headerName: "Q2 '22",
              field: 'q2',
              width: 75,
              columnGroupShow: 'open',
            },
            {
              headerName: "Q3 '22",
              field: 'q3',
              width: 75,
              columnGroupShow: 'open',
            },
            {
              headerName: "Oct '22",
              field: 'oct22',
              width: 75,
              columnGroupShow: 'open',
            },
            {
              headerName: "Nov '22",
              field: 'nov22',
              width: 75,
              columnGroupShow: 'open',
            },
            {
              headerName: 'Dec wk1',
              field: 'decWk1',
              width: 75,
            },
            {
              headerName: 'Dec wk2',
              field: 'decWk2',
              width: 75,
            },
            {
              headerName: 'Dec wk3',
              field: 'decWk3',
              width: 75,
            },
            {
              headerName: 'Dec wk4',
              field: 'decWk4',
              width: 75,
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
              field: 'asp',
              width: 100,
            },
            {
              headerName: "Q2 '22",
              field: 'q22',
              width: 70,
              columnGroupShow: 'open',
            },
            {
              headerName: "Q3 '22",
              field: 'q32',
              width: 70,
              columnGroupShow: 'open',
            },
            {
              headerName: "Oct '22",
              field: 'oct222',
              width: 70,
              columnGroupShow: 'open',
            },
            {
              headerName: "Nov '22",
              field: 'nov222',
              width: 70,
              columnGroupShow: 'open',
            },
            {
              headerName: '12/2',
              field: 'a122',
              width: 70,
            },
            {
              headerName: '12/9',
              field: 'a129',
              width: 70,
            },
            {
              headerName: '12/16',
              field: 'a1216',
              width: 70,
            },
            {
              headerName: '12/23',
              field: 'a1223',
              width: 70,
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