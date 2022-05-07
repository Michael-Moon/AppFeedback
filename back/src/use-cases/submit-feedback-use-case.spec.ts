import { SubmitFeedbackUseCase } from './submit-feedback-use-case';


const createFeedbackSpy = jest.fn();
const SendMailSpy =  jest.fn()


const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: SendMailSpy }
)



describe('Submit feedback', () => {

  
    it('should be able submit a feedback', async () => {
       

       await expect(submitFeedback.execute ({
            type: 'Bug',
            comment: 'example',
            screenshot: 'data:image/png;base64:teste.jpg',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(SendMailSpy).toHaveBeenCalled();
    })


    it('should not able to submit feedback without type', async () => {
   
       await expect(submitFeedback.execute ({
            type: '',
            comment: 'comment',
            screenshot: 'data:image/png;base64:teste.jpg',
        })).rejects.toThrow();

        
    })

    it('should not able to submit feedback without comment', async () => {
   
        await expect(submitFeedback.execute ({
             type: 'Bug',
             comment: '',
             screenshot: 'data:image/png;base64:teste.jpg',
        })).rejects.toThrow();

       
     })

     it('should not able to submit feedback without image', async () => {
   
        await expect(submitFeedback.execute ({
             type: 'Bug',
             comment: 'comment',
             screenshot: ':image/png;base64:teste.jpg',
        })).rejects.toThrow();

        
     })
} )