module.exports = {
  async redirects() {
    return [
        {
          source: '/rsvp/startup',
          destination: 'https://coda.io/form/AIS-Startup-Panel-RSVP-Form_dn01eqoJGES',
          basePath: false,
          permanent: true,
        },
        {
          source: '/member/attendance',
          destination: 'https://coda.io/form/AIS-Event-Attendance-Form_dVQqccTC16L',
          basePath: false,
          permanent: true,
        },
        {
          source: '/member/info',
          destination:
            'https://docs.google.com/document/d/10DimpEjMir8sgyJb6dKGGHHj5cIoNZP4KcQWdLKfrtM/edit',
          basePath: false,
          permanent: true,
        },
        {
          source: '/member/apply',
          destination: 'https://coda.io/form/AIS-Membership-Interest-Form-F23_dxNMATYGki2',
          basePath: false,
          permanent: true,
        },
        {
          source: '/officer/info',
          destination:
            'https://docs.google.com/document/d/1egahyPLReSmIsMC_tyNEo_X77T0a3oXlUC90xZ-ylrE/edit',
          basePath: false,
          permanent: true,
        },
        {
          source: '/officer/apply',
          destination: 'https://coda.io/form/AIS-Officer-Application-F23_d208KkPg2wm',
          basePath: false,
          permanent: true,
        },
        {
          source: '/aim/info',
          destination: 'https://docs.google.com/document/d/17CkhWdFdWq9dXzcr89jm_9y9HYVp4IauxA-LOzOUox4/edit',
          basePath: false,
          permanent: true,
        },
        {
          source: '/aim',
          destination: '/aim/info',
          basePath: false,
          permanent: true,
        },
        {
          source: '/aim/apply',
          destination: 'https://docs.google.com/forms/d/e/1FAIpQLSd0YBWRzrll4ICjBtev0n7zF_EgnJ_TaQljoEvgIcBGsy5u5A/viewform',
          basePath: false,
          permanent: true,
        },
        {
          source: '/aim/mentor-info',
          destination: 'https://docs.google.com/document/d/1py105xfpWlvjWc5c7175m5qDaCIeusuwCle2xnyI8Fo/edit',
          basePath: false,
          permanent: true,
        },
        {
          source: '/aim/mentor-apply',
          destination: 'https://docs.google.com/forms/d/e/1FAIpQLScR6YrTT1xPIKTvlQUqBPrMPuctEuxHVcIlmhYYcsGIwEiMBA/viewform',
          basePath: false,
          permanent: true,
        },
        {
          source: '/discord',
          destination: 'https://discord.com/invite/7fZQZyP',
          basePath: false,
          permanent: true,
        },
        {
          source: '/disc',
          destination: 'https://discord.com/invite/7fZQZyP',
          basePath: false,
          permanent: true,
        },
        {
          source: '/dc',
          destination: 'https://discord.com/invite/7fZQZyP',
          basePath: false,
          permanent: true,
        },
        {
          source: '/fb',
          destination: 'https://www.facebook.com/aisutd',
          basePath: false,
          permanent: true,
        },
        {
          source: '/facebook',
          destination: 'https://www.facebook.com/groups/aisutd',
          basePath: false,
          permanent: true,
        },
        {
          source: '/insta',
          destination: 'https://www.instagram.com/utdais',
          basePath: false,
          permanent: true,
        },
        {
          source: '/instagram',
          destination: 'https://www.instagram.com/utdais',
          basePath: false,
          permanent: true,
        },
        {
          source: '/ig',
          destination: 'https://www.instagram.com/utdais',
          basePath: false,
          permanent: true,
        },
        {
          source: '/linkedin',
          destination: 'https://www.linkedin.com/company/ais-utd',
          basePath: false,
          permanent: true,
        },
        {
          source: '/youtube',
          destination: 'https://www.youtube.com/channel/UCMkpr-CIpGEDfmgYmDh-Luw',
          basePath: false,
          permanent: true,
        },
        {
          source: '/yt',
          destination: 'https://www.youtube.com/channel/UCMkpr-CIpGEDfmgYmDh-Luw',
          basePath: false,
          permanent: true,
        }

        /*
        
        Legacy links. PLEASE DO NOT DELETE! These can serve as examples to draw upon to spark ideas
        or build off of if AIS ever needs it in the future.
        
        {
        source: '/hackreason-22',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLScHzA9r-_dq5dwbWmwT38wr67IlGaa7TBdP6PNRGANRB7N52w/viewform',
        basePath: false,
        permanent: true,
      },
      {
        source: '/member/attendance',
        destination: 'https://coda.io/form/Member-Attendance-Form_dEqbwI4W8O5',
        basePath: false,
        permanent: true,
      },
      {
        source: '/member/info',
        destination:
          'https://docs.google.com/document/d/1nHS3CIcXueuZG8hyNEQH4hkFkdmpL9WY2Q_RfiOXBO4/edit?usp=sharing',
        basePath: false,
        permanent: true,
      },
      {
        source: '/member/apply',
        destination: 'https://coda.io/form/AIS-Membership-Application_dNezXZc0_Z1',
        basePath: false,
        permanent: true,
      },
      {
        source: '/officer/info',
        destination:
          'https://docs.google.com/document/d/1RZRlCcmGRv19IZ5MP1_rltm9TeEZJa20uhEavVNzXDU/edit?usp=sharing',
        basePath: false,
        permanent: true,
      },
      {
        source: '/officer/apply',
        destination: 'https://coda.io/form/AIS-Officer-Application-F21_dyT3gX8Hvn9',
        basePath: false,
        permanent: true,
      },
      {
        source: '/aim/info',
        destination:
          'https://docs.google.com/document/d/1i4GJzsLaxLYvmLwQsQOwaa5H3KxIqfvprCpW9cSw-JQ/edit?usp=sharing',
        basePath: false,
        permanent: true,
      },
      {
        source: '/aim/apply',
        destination: 'https://coda.io/form/AIM-Fall-2021-Mentee-Application_dDlWrs9O7kG',
        basePath: false,
        permanent: true,
      },
      {
        source: '/kickoff',
        destination: '/events/kickoff-f21',
        basePath: false,
        permanent: true,
      },
      {
        source: '/ais-rl',
        destination: '/events/ais-rl',
        basePath: false,
        permanent: true,
      },
      {
        source: '/resources/rl-gitpod',
        destination: 'https://gitpod.io/#https://github.com/aisutd/intro-to-rl',
        basePath: false,
        permanent: true,
      },
      {
        source: '/dc',
        destination: 'https://discord.com/invite/7fZQZyP',
        basePath: false,
        permanent: true,
      },
      {
        source: '/fb',
        destination: 'https://www.facebook.com/aisutd',
        basePath: false,
        permanent: true,
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/groups/aisutd',
        basePath: false,
        permanent: true,
      },
      {
        source: '/insta',
        destination: 'https://www.instagram.com/utdais',
        basePath: false,
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/utdais',
        basePath: false,
        permanent: true,
      },
      {
        source: '/ig',
        destination: 'https://www.instagram.com/utdais',
        basePath: false,
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/company/ais-utd',
        basePath: false,
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UCMkpr-CIpGEDfmgYmDh-Luw',
        basePath: false,
        permanent: true,
      },
      {
        source: '/yt',
        destination: 'https://www.youtube.com/channel/UCMkpr-CIpGEDfmgYmDh-Luw',
        basePath: false,
        permanent: true,
      },*/
    ];
  }
};
