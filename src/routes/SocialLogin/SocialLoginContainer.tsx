import { useMutation } from '@apollo/react-hooks';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ILogUserInVariables } from '../../apollo';
import Loader from '../../components/Loader';
import { LOG_USER_IN } from '../../sharedQueries.local';
import { facebookConnect, facebookConnectVariables } from '../../types/api';
import SocialLoginPresenter from './SocialLoginPresenter';
import { FACEBOOK_CONNECT } from './SocialLoginQueries';

const SocialLoginContainer: React.FunctionComponent<
  RouteComponentProps
> = ({ history }) => {
  const [facebookMutation, { loading }] = useMutation<
    facebookConnect,
    facebookConnectVariables
  >(FACEBOOK_CONNECT);
  const [loginMutation] = useMutation<any, ILogUserInVariables>(LOG_USER_IN);

  const handleFacebookConnect = async (userInfo: any) => {
    if (userInfo.accessToken) {
      try {
        const { data } = await facebookMutation({
          variables: {
            email: userInfo.email,
            fbId: userInfo.userID,
            firstName: userInfo.name,
            lastName: userInfo.name,
          },
        });

        console.log(data);
        if (data && data.FacebookConnect) {
          if (data.FacebookConnect.ok) {
            if (data.FacebookConnect.token) {
              await loginMutation({
                variables: { token: data.FacebookConnect.token },
              });
              toast.success(`Welcome ${userInfo.name}`);
              history.replace('/');
            }
          } else {
            toast.error(data.FacebookConnect.error);
          }
        }
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error('Could not log you in 😞');
    }
  };

  return (
    <>
      <SocialLoginPresenter loginCallback={handleFacebookConnect} />
      {loading && <Loader />}
    </>
  );
};

export default SocialLoginContainer;
