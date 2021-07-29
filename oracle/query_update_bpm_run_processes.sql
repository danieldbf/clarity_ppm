UPDATE bpm_run_processes
SET process_engine_id = NULL
WHERE process_engine_id IN (?,?)

UPDATE bpm_run_processes
SET status_code = 'BPM_PIS_ABORTED'
where status_code = 'BPM_PIS_RUNNING'
and start_date <= sysdate -90;
