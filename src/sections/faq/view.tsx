'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Icon,
  Paper,
  Stack,
} from '@mui/material';
import Iconify from 'src/components/iconify';
import SportsList from 'src/components/sports-list/sports-list';
import { useTheme } from '@mui/material/styles';
import TopPredictions from 'src/components/top-predictions';
import UpcomingGames from 'src/components/upcoming-games';
import SelectionSlip from 'src/components/selection-slip';
import Membership from 'src/components/membership';
import { useResponsive } from 'src/hooks/use-responsive';
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function FaqView() {
  const settings = useSettingsContext();
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const [expanded, setExpanded] = useState<string | false>('panel1');
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Stack alignItems="center" p={1}>
      <Stack
        width="100%"
        maxWidth={1200}
        mx="auto"
        bgcolor="white"
        mt={2}
        boxShadow={theme.customShadows.z4}
        sx={{
          p: { xs: 1, lg: 3 },
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Typography variant="h4">FREQUENTLY ASKED QUESTIONS</Typography>
            <Typography variant="subtitle1">
              Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow
              value whereas accurate e-commerce vectors.
            </Typography>
          </Stack>
          <Stack component="img" src="/assets/logo.png" width={80} height={70} />
        </Stack>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel1' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">What makes SPREDD's predictions accurate?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel2' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">What Makes SPREDD's parlay wizard unique?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel3' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">
              How to get started with SPREDD for expert and accurate predictions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel4' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">Four things you need to know about SPREDD?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel5' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">Why does SPREDD focus on AI predictions?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel6' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">Who are the Experts behind SPREDD?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel7' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">
               Need Assistance or Have Questions About SPREDD? How to Get in Touch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel8' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">What Payment Methods Does SPREDD Accept?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel9' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">Can I cancel my subscription at any time?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel10' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">What Payment Methods Does SPREDD Accept?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel11' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">
              How Does SPREDD Ensure User Privacy and Data Security?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={expanded == 'panel12' ? 'icons8:minus' : 'icons8:plus'}
                color="primary.main"
                width={24}
              />
            }
          >
            <Typography variant="subtitle1">
              What impact does SPREDD want to leave on the future of sports betting?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              SPREDD's advanced AI models remove human bias and incorporate vast datasets to provide
              highly reliable and data-backed predictions. Using machine learning algorithms and
              natural language processing techniques, SPREDD analyzes millions of data points from
              various sources, including historical data, team and player statistics, and real-time
              game data, to generate accurate predictions.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
}
