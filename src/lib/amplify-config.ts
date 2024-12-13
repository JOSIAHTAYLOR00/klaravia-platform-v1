import { Amplify, ResourcesConfig } from 'aws-amplify';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import { defaultStorage } from 'aws-amplify/utils';

// const config: ResourcesConfig = {
//   Auth: {
//     Cognito: {
//       userPoolId: process.env.REACT_APP_USER_POOLS_ID || '',
//       userPoolClientId: process.env.REACT_APP_USER_POOLS_WEB_CLIENT_ID || '',
//       signUpVerificationMethod: 'code',
//       loginWith: {
//         email: true,
//         phone: false,
//         username: false
//       },
//       mfa: {
//         status: 'off'
//       },
//       passwordFormat: {
//         minLength: 8,
//         requireLowercase: true,
//         requireUppercase: true,
//         requireNumbers: true,
//         requireSpecialCharacters: true
//       }
//     }
//   },
//   API: {
//     GraphQL: {
//       endpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT || '',
//       region: process.env.REACT_APP_AMPLIFY_REGION || '',
//       defaultAuthMode: 'apiKey',
//       apiKey: process.env.REACT_APP_APPSYNC_KEY
//     }
//   },
//   Storage: {
//     S3: {
//       bucket: 'installer-cover-images',
//       region: process.env.REACT_APP_AMPLIFY_REGION || '',
//     }
//   }
// };

export const config: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: "us-east-2_ciKoAoORO",
      userPoolClientId: "1ftt8k79e9fdljodfrejpp4god",
      signUpVerificationMethod: 'code',
      loginWith: {
        email: true,
        phone: false,
        username: false
      },
      mfa: {
        status: 'off'
      },
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true
      }
    }
  },
  API: {
    GraphQL: {
      endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '',
      region: "us-east-2",
      defaultAuthMode: 'apiKey',
    }
  },
  Storage: {
    S3: {
      bucket: 'installer-cover-images',
      region: "us-east-2",
    }
  }
};

export function configureAmplify() {
  Amplify.configure(config);

  // Configure storage if needed
  defaultStorage.setItem('amplify-auth-storage-type', 'localStorage');
}