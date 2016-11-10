module.exports = {
  application: {
    name: 'Function Bucket',
    uid: "f754dae8-1bf0-01f9-c15f-48eef1f1dff6",
    version: '1.0.0',
    attributesJson: {
      requirePromoCodeForRegistration: false,
      defaultNewRegistrationLicenseKey: 'FBKT_ADMIN',
      defaultNewUserLicenseKey: 'FBKT_USER'
    },
    licenseTypes: [
      {
        name: 'Fbkt Worker',
        licenseTypeKey: 'FBKT_WORKER'
      },
      {
        name: 'Super Administrator',
        licenseTypeKey: 'FBKT_SUPER_ADMIN'
      },
      {
        name: 'Administrator',
        licenseTypeKey: 'FBKT_ADMIN',
        promoCodes: [
          {
            name: 'Admin Promo Code',
            thePromoCode: 'PROMO_ADMIN'
          }
        ],
        attributesJson: {
          permissions: [
            'Admin'
          ]
        }
      },
      {
        name: 'User',
        licenseTypeKey: 'FBKT_USER',
        promoCodes: [
          {
            name: 'User Promo Code',
            thePromoCode: 'PROMO_USER'
          }
        ]
      }
    ],
  },
  organizationsAndUsers: [
    {
      name: 'FunctionBucket',
      location: {
        name: "Big Mario's",
        geoJson: {type: "Point", coordinates: [-122.347812, 47.627044]}
      },
      contacts: [
        {
          licenses: [
            {
              licenseTypeKey: 'FBKT_ADMIN',
            }
          ],
          useDefaultPassword: true,
          email: 'functionbucket@gmail.com',
          firstName: 'Function',
          lastName: 'Bucket',
          phoneNumber: '',
          jobTitle: '',
          location: {
            name: "Biscuit Bitch",
            geoJson: {type: "Point", coordinates: [-122.341856, 47.610606]}
          }
        },
        {
          licenses: [
            {
              licenseTypeKey: 'FBKT_SUPER_ADMIN',
            }
          ],
          useDefaultPassword: true,
          email: 'functionbucket+fbktsuperadmin@gmail.com',
          firstName: 'Fbkt',
          lastName: 'SuperAdmin',
          phoneNumber: '',
          jobTitle: '',
          location: {
            name: "Seamonster",
            geoJson: {type: "Point", coordinates: [-122.332394, 47.661714]}
          }
        },
        {
          licenses: [
            {
              licenseTypeKey: 'FBKT_ADMIN',
            }
          ],
          useDefaultPassword: true,
          email: 'functionbucket+fbktadmin@gmail.com',
          firstName: 'Fbkt',
          lastName: 'Admin',
          phoneNumber: '',
          jobTitle: '',
          location: {
            name: "Green Leaf",
            geoJson: {type: "Point", coordinates: [-122.351771, 47.617049]}
          }
        },
        {
          licenses: [
            {
              licenseTypeKey: 'FBKT_USER',
            }
          ],
          useDefaultPassword: true,
          email: 'functionbucket+fbktuser@gmail.com',
          firstName: 'Fbkt',
          lastName: 'User',
          phoneNumber: '',
          jobTitle: '',
          location: {
            name: "Rancho Bravo",
            geoJson: {type: "Point", coordinates: [-122.318993, 47.615337]}
          }
        },
        {
          licenses: [
            {
              licenseTypeKey: 'FBKT_WORKER',
            }
          ],
          email: 'functionbucket+noreply@gmail.com',
          firstName: 'Fbkt',
          lastName: 'NoReply',
          hashedPassword: 'INVALID'
        },
      ]
    },
    {
      name: 'Funktion Junktion',
      location: {
        name: "Rocco's",
        geoJson: {type: "Point", coordinates: [-122.345135, 47.614240]}
      },
      contacts: [
        {
          licenses: [
            {
              licenseTypeKey: 'FBKT_USER',
            }
          ],
          useDefaultPassword: true,
          email: 'functionbucket+funktion_junktion@gmail.com',
          firstName: 'FUNKTION',
          lastName: 'JUNKTION',
          phoneNumber: '',
          jobTitle: '',
          location: {
            name: "Un Bien",
            geoJson: {type: "Point", coordinates: [-122.406122, 47.675028]}
          }
        },
      ]
    }
  ]
};
