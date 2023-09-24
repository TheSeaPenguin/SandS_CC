import { AccordionContainer, SideBox } from '../components';
import { Attributes, Resources } from './stats';

export interface CharacterSummaryProps {}

export function CharacterSummary(props: CharacterSummaryProps) {
  return (
    <SideBox boxTitle="Character Summary">
      <Resources />
      <AccordionContainer title="Attributes" defaultOpen={true}>
        <Attributes vertical={false} width={'25%'} height={'3vh'} spacing={0} />
      </AccordionContainer>
    </SideBox>
  );
}
