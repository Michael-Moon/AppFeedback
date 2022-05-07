
import React, { useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Chat, ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { styles } from './styles';
import { theme } from '../../theme';
import { Opitons } from '../Opitons';
import { Success } from '../Success';
import { Form } from '../Form';
import { feedbackTypes } from '../../utils/feedbackTypes';


export type FeedbackType = keyof typeof feedbackTypes;

export function Widget() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomShetRef = useRef<BottomSheet>(null);

  function handleOpen(){
    bottomShetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);

  }

  function handleFeedbackSend(){
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity  
        style={styles.button}
        onPress={handleOpen}
      >
         <ChatTeardropDots
            size={24}
            weight="bold"
            color={theme.colors.text_on_brand_color} 
         />
      </TouchableOpacity>

      <BottomSheet      
      ref={bottomShetRef}
      snapPoints={[1,280]}
      backgroundStyle={styles.modal}
      handleIndicatorStyle={styles.indicator}
      >
        {
          feedbackSent ? 
            <Success
              onSendAnotherFeedback={handleRestartFeedback}
            />
            :
            <>
              {
                feedbackType ? 
                <Form
                  feedbackType={feedbackType}
                  onFeedbackSent={ handleFeedbackSend}
                  onFeedbackCanceled={ handleRestartFeedback}
                />
                :
                <Opitons onFeedbackTypeChanged={setFeedbackType} />
              }
            </> 
        }
       

      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);